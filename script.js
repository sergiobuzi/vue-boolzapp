const { createApp } = Vue;

createApp({
    data() {
        return {

            //indice di partenza per i contatti
            selectedContact: 0,

            //array di oggetti per i contatti
            phonebook: [
                {
                    image: 'img/avatar_1.jpg',
                    name: 'Peppe Ciaccarell',
                    lastlog: '14:12',
                    msg1: 'Le finali?',
                    msg2: 'Non penso',
                    msg3: 'Molto bene',
                }, {
                    image: 'img/avatar_2.jpg',
                    name: 'Alessandro Montana',
                    lastlog: '04:22',
                    msg1: 'Hai preso il ferro?',
                    msg2: 'Ne parliamo nelle sedi opportune',
                    msg3: 'Ok',
                }, {
                    image: 'img/avatar_3.jpg',
                    name: 'Christian Garrinello',
                    lastlog: '06:66',
                    msg1: 'Hai fatto esercizio?',
                    msg2: 'Non penso che lo farò',
                    msg3: 'Fai bene',
                }, {
                    image: 'img/avatar_4.jpg',
                    name: 'Giorgio Belardoni',
                    lastlog: '15:18',
                    msg1: 'Ho preso tren',
                    msg2: 'Per dove?',
                    msg3: 'Per la palestra',
                }, {
                    image: 'img/avatar_1.jpg',
                    name: 'Alessio Brugi',
                    lastlog: '69:90',
                    msg1: 'Non pensi anche tu?',
                    msg2: 'No di solito no',
                    msg3: 'Io penso di essere esagonale',
                }, {
                    image: 'img/avatar_io.jpg',
                    name: 'Sara Afro',
                    lastlog: '19:00',
                    msg1: 'Sono tornato in africa',
                    msg2: 'Non penso mi interessi',
                    msg3: 'Portaombrelli',
                }
            ],

        }
    },

    methods: {
        selectContact(index) {
            this.selectedContact = index;
        },
    }

}).mount('#app')