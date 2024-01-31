<template>
    <v-card flat>
        <v-container class="ml-4 mr-4">
            <v-img src="@/assets/teachable_machine_screenshot_1.png" aspect-ratio="2.75">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="white"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
            <p> <br> </p>
            <ul>
                <li class="text-left">Nun siehst du die Grundstruktur, wie das Trainieren einer KI für
                    Klassifikationsprobleme aussieht.</li>
                <li class="text-left">Als erstes muss man sich entscheiden, welche Klassen man gegeben hat. In
                    diese Klassen lädt man dann entsprechende Daten ein. Man spricht von „gelabelten Daten“,
                    also vorher bekannten Daten, welche für das Training verwendet werden.</li>
                <li class="text-left">Wenn die Klassen mit den Daten gefüllt sind, kann man das Modell
                    trainieren. Ein Algorithmus (in dem Fall von Teachable Machine ein künstliches neuronales
                    Netz) versucht, aus den vom EntwicklerInnen-Team gegebenen Daten Zusammenhänge und Muster zu
                    erstellen, welche später auch unbekannte Bilder klassifizieren sollen.</li>
            </ul>
        </v-container>
    </v-card>
</template>