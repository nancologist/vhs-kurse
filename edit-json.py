import json
import pprint

with open('berlinerkurse.json', "r+") as my_file:

    # Before Editing +++++++++++++++++++++++++++++++++++
    data_dict = json.load(my_file)
    events = data_dict['veranstaltungen']['veranstaltung']

    for event in events:
        del event['dvv_kategorie']

    my_file.truncate(0) # Clear File
    my_file.seek(0) # Writing-Pointer to Start of File
    json.dump(data_dict, my_file)


# ITS VORTRAG: DATENSCHUTZGESETZE (BDSG / LDSG)
## DATENSCHUTZBEAUFTRAGE VON PIXELAPARK FRAGEN : welche RECHTE UND PFLICHTEN hat eine Datenschutbeauftrage in der Firma? Verbindung zwischen ?