// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use mdns_sd::{ServiceDaemon, ServiceEvent};
use serde::Serialize;
use std::thread;
use tauri::{Emitter};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Serialize, Clone)]
struct MdnsDevice {
    name: String,
    hostname: String,
    addresses: Vec<String>,
    port: u16,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![start_mdns_scan])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


#[tauri::command]
fn start_mdns_scan(app: tauri::AppHandle) -> Result<(), String> {
    thread::spawn(move || {
        let mdns = ServiceDaemon::new().expect("Failed to create daemon");

        let service_type = "_http._tcp.local.";
        let receiver = mdns.browse(service_type).expect("Browse failed");

        while let Ok(event) = receiver.recv() {
            if let ServiceEvent::ServiceResolved(info) = event {
                let device = MdnsDevice {
                    name: info.get_fullname().to_string(),
                    hostname: info.get_hostname().to_string(),
                    addresses: info
                        .get_addresses()
                        .iter()
                        .map(|ip| ip.to_string())
                        .collect(),
                    port: info.get_port(),
                };

                app.emit("mdns-device-found", device).unwrap();
            }
        }
    });

    Ok(())
}