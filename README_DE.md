# BE-Mock-Controller

Angenommen, du entwickelst eine Anwendung für ein Online-Notizbuch. Du möchtest eine API-Route einrichten, um alle vorhandenen Notizen abzurufen. Verwende Express.js und die Mock-Datenbank-Technik mit lowdb, um diese Funktionalität zu implementieren.

Aufgabenstellung:

1. Erstelle ein neues Express.js-Projekt.
2. Installiere die erforderlichen Abhängigkeiten, einschließlich lowdb.
3. Lege eine JSON-Datei als Mock-Datenbank an, um Notizen zu speichern. Initialisiere sie mit einigen Beispieldaten. (Siehe Beispiel)
4. Erstelle einen Controller im "controllers"-Verzeichnis deines Projekts.
5. Definiere eine Route für die GET-Methode, die auf "/api/notes" hört und den entsprechenden Controller aufruft.
6. Im Controller, lese alle Notizen aus der Mock-Datenbank und sende sie als JSON-Antwort zurück.
7. Teste die Implementierung, indem du den Server startest und eine GET-Anfrage an "/api/notes" sendest. Überprüfe, ob du die gespeicherten Notizen als JSON erhalten hast.

Beispiel-Mock-Datenbank

```json
{
    "content": [
        {
            "id": 1,
            "title": "Einkaufsliste",
            "content": "Milch, Eier, Brot"
        },
        {
            "id": 2,
            "title": "Meeting Notizen",
            "content": "Besprechung um 14:00 Uhr"
        },
        {
            "id": 3,
            "title": "Ideen für den Blog",
            "content": "Neuer Artikel: Die Bedeutung von künstlicher Intelligenz"
        }
    ]
}
```
