# Products-JSON-Template

Der Produktmanager von _Splendr_ war auf einer Web-Konferenz und hat gehört, dass dieses [Ajax](http://de.wikipedia.org/wiki/Ajax_(Programmierung)) sehr wichtig ist. Jetzt möchte er das auch haben.

Ihr Aufgabe ist es, einen entsprechenden Prototypen zu bauen.

Um sich die Arbeit zu erleichtern, können Sie eine JavaScript-Bibliothek namens [jQuery](https://jquery.com/) verwenden. Nützliche Lernquellen finden Sie unter der [Hilfeseite jQuery](https://beier.f4.htw-berlin.de/wiki/jquery/) und als Beispiel-Projekt einen [Wechselkursrechner](https://github.com/HTW-Webtech/Wechselkursrechner).

Zudem wird Ihnen eine fertige, in PHP geschriebene API zur Verfügung gestellt: [github.com/HTW-Webtech/Products-JSON-Template](https://github.com/HTW-Webtech/Products-JSON-Template). Sie bietet ein <small>(halbwegs)</small> [REST](http://de.wikipedia.org/wiki/Representational_State_Transfer)-basiertes Interface zum Anlegen, Bearbeiten, Anzeigen und Löschen von Produkten. Die Daten werden dabei im [JSON](http://de.wikipedia.org/wiki/JavaScript_Object_Notation)-Format ausgetauscht. Die Schnittstelle sieht wie folgt aus:

| HTTP     | Pfad   | Aktion |
| -------- | ------ | ------ |
| `GET`    | `/`    | Gibt alle Produkte zurück |
| `GET`    | `/:id` | Gibt ein Produkt zurück |
| `POST`   | `/`    | Legt ein neues Produkt an |
| `PUT`    | `/:id` | Ändert ein Produkt |
| `DELETE` | `/:id` | Löscht ein Produkt |

Ein Produkt muss dabei als JSON-Objekt übergeben werden und kann die Schlüssel `name`, `url`, `image` und `price` enthalten.
