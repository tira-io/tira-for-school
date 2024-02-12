<template>
    <v-card flat>

        <v-btn>Trainiere Deine KI</v-btn>

        <v-expansion-panels>
            <v-expansion-panel title="Erweiterte Einstellungen">
            <v-expansion-panel-text>
                Epochen: 50

Eine Epoche ist abgeschlossen, wenn jedes Beispiel im Trainingsdatenpool mindestens einmal in das Trainingsmodell eingegeben wurde. Sind deine Epochen beispielsweise auf 50 eingestellt, geht das von dir trainierte Modell den gesamten Trainingsdatenpool 50 Mal durch. Generell gilt, je gr&ouml;&szlig;er diese Zahl ist, desto besser lernt dein Modell, die Daten vorherzusagen.

Wahrscheinlich solltest du diese Zahl &auml;ndern (in den meisten F&auml;llen erh&ouml;hen), bis du mit deinem Modell gute Ergebnisse bei der Vorhersage erzielst.


       Batchgr&ouml;&szlig;e: 16

Ein Batch ist ein Satz an Beispielen, die f&uuml;r eine Trainings-Iteration verwendet werden. Wenn du beispielsweise 80 Bilder hast und als Batchgr&ouml;&szlig;e 16 w&auml;hlst, werden die Daten werden in 80/16 = 5 Batches aufgeteilt. Sobald alle f&ouml;nf Batches in das Modell eingegeben wurden, ist genau eine Epoche abgeschlossen.

Diese Zahl musst du vermutlich nicht &auml;ndern, um gute Trainingsergebnisse zu erzielen.


        Lernrate: 0.001
        &Auml;ndere diese Zahl nur mit gro&szlig;er Vorsicht. Selbst kleine Unterschiede k&ouml;nnen eine gro&szlig;e Auswirkung auf die Lernf&auml;higkeit deines Modells haben.

            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>


       


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