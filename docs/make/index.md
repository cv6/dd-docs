---
sidebar_position: 2
title: "[DD] Make Connector"
sidebar_label: "[DD] Make Connector"
description: Konfigurationsanleitung für den Make.com Connector
---

# [DD] Make Connector

Dieses Add-on verbindet deine XenForo-Community mit **Make.com** (ehemals Integromat) über ein professionelles, ereignisbasiertes Webhook-System.

## 1. Einrichtung in Make.com
1. Erstelle ein neues **Scenario** und füge ein Modul vom Typ **Webhooks -> Custom Webhook** hinzu.
2. Kopiere die **Webhook-URL**.
3. **Sicherheit (Empfohlen):** Füge direkt nach dem Webhook einen Filter hinzu, der den Header `x-make-apikey` prüft.

---

## 2. Einrichtung im XenForo ACP
Navigiere zu `Setup -> Optionen -> [DD] Make Connector`:

* **Webhook URL:** Füge hier deine Make.com URL ein.
* **API Key:** Gib eine sichere Zeichenfolge ein. (`x-make-apikey`)
* **Social Media Fallback Image:** Gib die vollständige URL deines Logos an.

---

## 3. Das ereignisbasierte System
Das Add-on sendet bei jeder Anfrage einen `event`-Key.

| Ereignis | Ursprung | Empfohlene Logik |
| :--- | :--- | :--- |
| `webhook_verification` | ACP Option Save | **Keine.** Verbindungstest. |
| `simulation` | Admin-Simulator | An Test-Kanal senden. |
| `new_thread` | Reale Benutzeraktivität | Live Social Media Posts. |

---

## 4. Intelligente Bild-Strategie
Der Payload enthält zwei verschiedene Bildfelder:

* **`media_url`**: Der erste Bildanhang aus dem Thema.
* **`meta_url`**: Dein Branding-Bild (aus den ACP-Optionen).

### Make Formel (Fallback-Logik)
Wenn du möchtest, dass immer ein Bild gesendet wird, nutze folgende Formel in Make:
`if(media_url; media_url; meta_url)`

---

## 5. Testen & Verifizierung
Das Add-on enthält einen integrierten Simulator unter `Werkzeuge -> [DD] Make Connector Simulator`.

1. Klicke in Make.com auf **"Redetermine data structure"**.
2. Sende einen Test via XenForo Simulator.