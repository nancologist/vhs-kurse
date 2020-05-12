# Fake-Abschlussprojekt

# 1. Ideen
## 1.1. Liste der optimalen APIs und Json-Dateien

* __BreweryDB__ - Beer, beer and more beer!
    * Sandbox - Free up to 10k requests a day
    * Paid plans available
    * List beers and breweries

* __Nasa APIs__
    * Tutorial : (ab der Minute 06:00) https://www.youtube.com/watch?v=v2bi4a2iMf0 
    * Requires API key
    * Has astronomy picture of the day
    * event trackers for natrual events
    * Mars weahter service : LUSTIG!
    * Rover images
    
* __Reddit__
    * just add .json - ``rediit.com/r/webdev.json``
    * Great to grap pictures data and more
    * No auhtentication needed
    * beginner friendly
    * for example "Grabbing favorite Subreddit Headlines"
    
* __OpenWeatherMap__
    * 60 calls per minute with free plan
    * 5 days , 3 days forecase
    * Weather APIs sometimes go down and changes, so they are NOT RELIABLE that much. But this one is almost reliable
    
* __YouTube API__
    * Little more complicated, can grab a bunch of information
    * List channels by ID
    * Grab Playlist
    * Search
    * Grab comments

* Berliner Hochschulkursen : https://daten.berlin.de/datensaetze/kurse-der-berliner-volkshochschulen
___
___
___

# Project: Berliner Kurse

# 0. Details
* Anzahl der Datensätze : 1877

# 1. Report

## 1.1. Bearbeitung der Rohdaten
Wegen einer Schlüssel in den JSON-Rohdaten von der Quelle, der ``"#test"`` (siehe in ``sample-raw.json``) lautet mussten alle 1877 Datensätze bearbeitet werden. 

Die Formattierung des obengenannten Schlüssels ist bei der angewendeten Datenbank (Firebase) nicht gültig.

Da dieser Schlüsser und deren Eltern keine große Rolle in der Applikation spielen wurden sie aus den Datensätzen gelöscht. 