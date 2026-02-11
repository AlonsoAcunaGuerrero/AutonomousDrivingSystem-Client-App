use serde::Serialize;

fn main() {
    tauri_build::build()
}

#[derive(Serialize)]
pub struct MdnsDevice {
    pub name: String,
    pub addr: String,
    pub port: u16,
}