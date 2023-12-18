const { createApp } = Vue;

createApp({
    data() {
        return {
            
            // creo delle variabili generali per nome e avatar
            nome: '',
            avatar:'',

            // creo un array  che contanga i messaggi della persona selezionata
            containerMessaggi: [],

            nuovoMessaggio: '',
            

            //array di oggetti per i contatti
            phonebook: [
                {
                    name: 'Peppe Ciaccarell',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Le Finali?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non penso',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Molto bene',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro Montana',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Hai preso il ferro?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Ne parliamo nelle sedi opportune',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Ok',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Christian Garinello',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Hai fatto esercizio?',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Non penso che lo farò',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Fai bene',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giorgio Belardoni',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai preso tren?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Per dove?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:55:00',
                            message: 'Per la palestra',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Sara Afro',
                    avatar: 'img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Sono tornato in Africa',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non penso mi interessi',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Portaombrelli',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Alessio Brugi',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Non pensi anche tu?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No di solito no',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Io penso di essere esagonale',
                            status: 'sent'
                        }
                    ],
                }
            ]
            
        }
    },

    methods: {

        selectContact(i) {
            // creo una variabile che mi selezioni  i messaggi all'interno della rubrica
            let ArrayMessaggi = this.phonebook[i].messages;

            // creo un array vuoto  per metterci i messaggi 
            let msg = [];

            // ciclo tutti i messaggi all' interno di messages
            for(let i = 0; i < ArrayMessaggi.length; i++){
                // pusho i messaggi all'interno dell'array appena creato
                msg.push(ArrayMessaggi[i]);
            };

            // sovrascrivo l'array d'appoggio all' array principale
            this.containerMessaggi = msg;

            // creo una variabile che mi selezioni nome e avatar
            let nomeContatto = this.phonebook[i].name;
            let avatarContatto  = this.phonebook[i].avatar;

            // le sovrascrivo alle variabili generali
            this.nome = nomeContatto;
            this.avatar = avatarContatto; 
            
        },


        sendMessage() {
            this.containerMessaggi.push ({
                message: this.nuovoMessaggio,
                status: 'sent',
                
            });
            //queasto comando mi fa tornare l input text vuoto  dopo aver inviato la stringa con il bottone
            this.nuovoMessaggio= "";
            setTimeout(()=> {

                this.containerMessaggi.push ({
                    message: 'Ok',
                    status: 'received',
                    
                });

            },"1000")
        }

    }

}).mount('#app')