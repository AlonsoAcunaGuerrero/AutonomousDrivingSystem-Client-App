// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use mdns::{RecordKind};
use std::time::Duration;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![discover_mdns])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


#[tauri::command]
pub async fn discover_mdns(service: String) -> Vec<MdnsDevice> {
    let mut devices = Vec::new();

    let discovery = mdns::discover::all(service, Duration::from_secs(5))
        .expect("mDNS discovery failed")
        .listen();

    for response in discovery.take(20) {
        let mut name = None;
        let mut addr = None;
        let mut port = None;

        for record in response.records() {
            match record.kind {
                RecordKind::A(ip) => addr = Some(ip.to_string()),
                RecordKind::SRV { port: p, .. } => port = Some(p),
                RecordKind::PTR(ref n) => name = Some(n.clone()),
                _ => {}
            }
        }

        if let (Some(name), Some(addr), Some(port)) = (name, addr, port) {
            devices.push(MdnsDevice { name, addr, port });
        }
    }

    devices
}