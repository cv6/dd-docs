---
id: core
sidebar_position: 1
title: "[DD] Core"
sidebar_label: "[DD] Core"
description: Basis-Framework für alle Dice Dragons Add-ons
---

# [DD] Core

Der **Dice Dragons Core** ist das Herzstück und die Voraussetzung für alle weiteren Module (wie den Make Connector). Er stellt grundlegende Funktionen und Helper-Klassen bereit.

## Funktionen

* **Zentrales Logging:** Alle [DD] Add-ons schreiben in einen gemeinsamen Log-Channel.
* **Option-Helper:** Vereinfachter Zugriff auf XenForo-Optionen.
* **Branding-Free:** Verwalte Copyright-Hinweise zentral.

## Installation

1. Lade das Archiv herunter.
2. Entpacke es und lade den Inhalt von `upload` in dein XenForo-Verzeichnis.
3. Installiere das Add-on via ACP oder CLI:
   `php cmd.php xf:addon-install cv6/Core`

:::info Abhängigkeit
Bitte installiere dieses Add-on **zuerst**, bevor du andere [DD] Erweiterungen nutzt.
:::