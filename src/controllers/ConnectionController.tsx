import { invoke } from "@tauri-apps/api/core"
import { useEffect, useState } from "react"
import { MdnsDevice } from "../types"

export default function MdnsList() {
  const [devices, setDevices] = useState<MdnsDevice[]>([])

  useEffect(() => {
    invoke<MdnsDevice[]>("discover_mdns", {
      service: "_http._tcp.local."
    }).then(setDevices)
  }, [])

  return (
    <ul>
      {devices.map((d, i) => (
        <li key={i}>
          <strong>{d.name}</strong><br />
          {d.addr}:{d.port}
        </li>
      ))}
    </ul>
  )
}
