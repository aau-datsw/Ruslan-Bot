require('dotenv').config();
const fetch = require('node-fetch');
const url = "https://api.toornament.com/oauth/v2/token";
api_key = process.env.API_KEY.toString();

module.exports =  {
    Authenticate: async function Authenticate(id, secret) {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials')
        params.append('client_id', id)
        params.append('client_secret', secret)
        params.append('scope', 'organizer:result organizer:participant')
        return fetch(url, {
            method: 'POST',
            headers: {'X-Api-Key' : api_key},
            body: params
        }).then(res => res.json()).then(obj => obj.access_token);
    },

    getMatches: async function getMatches(tournament_id, auth_key, args = {}, api_key) {
        const params = new URLSearchParams();
        const url = new URL(`https://api.toornament.com/organizer/v2/tournaments/${tournament_id}/matches`);
        for (const [key, value] of Object.entries(args)) {
            params.append(key, value);
        }
        url.search = params.toString();
        return fetch(
             url, {
                method: 'GET',
                headers: {
                    'X-Api-Key' : api_key,
                    'Authorization' : auth_key,
                    'Range' : 'matches=0-99'
                },
            },
        ).then(res => res.json()).then(obj => obj).catch(console.log)
    },

    getParticipants: async function getParticipants(tournament_id, auth_key, args = {}) {
        const params = new URLSearchParams();
        const url = new URL(`https://api.toornament.com/organizer/v2/tournaments/${tournament_id}/participants`);
        for (const [key, value] of Object.entries(args)) {
             params.append(key, value);
        }
        url.search = params.toString();
        fetch(
             url, {
                method: 'GET',
                headers: {
                    'X-Api-Key' : this.api_key,
                    'Authorization' : auth_key,
                    'Range' : 'participants=0-49'
                },
            },
        ).then(res => res.json()).then(obj => console.log(obj)).catch(console.log)
    },

    getParticipantID: async function getParticipantID(tournament_id, auth_key, teamname) {
        const params = new URLSearchParams();
        const url = new URL(`https://api.toornament.com/organizer/v2/tournaments/${tournament_id}/participants`);
        params.append('name', teamname);
        url.search = params.toString();
        return fetch(
             url, {
                method: 'GET',
                headers: {
                    'X-Api-Key' : api_key,
                    'Authorization' : auth_key,
                    'Range' : 'participants=0-49'
                },
            },
        ).then(res => res.json()).then(obj => obj[0].id)
    },

    getParticipantArray: async function getParticipantArray(tournament_id, auth_key, id) {
        const params = new URLSearchParams();
        const url = new URL(`https://api.toornament.com/organizer/v2/tournaments/${tournament_id}/participants/${id}`);
        url.search = params.toString();
        return fetch(
             url, {
                method: 'GET',
                headers: {
                    'X-Api-Key' : api_key,
                    'Authorization' : auth_key
                },
            },
        ).then(res => res.json()).then(obj => obj.lineup);
    },

    getParticpiantsNextMatch: async function getParticpiantsNextMatch(tournament_id, auth_key, id, api_key) {
        console.log(id);
        let time;
        let resmatch;
        let matches = await this.getMatches(tournament_id, auth_key, {is_scheduled : 1}, api_key);
        matches.sort((a,b) => {
            let keyA = new Date(a.scheduled_datetime), keyB = new Date(b.scheduled_datetime);
            if (keyA > keyB) return 1;
            if (keyA < keyB) return -1;
            return 0;
        });

        matches.forEach(match => {
            match.opponents.forEach(opponent => {
                try {
                    if (opponent.participant.name){
                        let corrname = opponent.participant.name;
                        if (corrname == id) 
                        {
                            time = new Date(match.scheduled_datetime);
                            resmatch = match;
                        }   
                    }
                } catch (error) {
                    return undefined;
                }
            });   
        });

        let dayMap = {
            0 : 'Sunday',
            1 : 'Monday',
            2 : 'Tuesday',
            3 : 'Wednessday',
            4 : 'Thursday',
            5 : 'Friday',
            6 : 'Saturday'
        };
        
        let hourprefix; time.getHours() < 10 ? hourprefix = '0' : hourprefix = '';

        let timestr = `${dayMap[time.getDay()]} - ${hourprefix + time.getHours()}:${hourprefix + time.getMinutes()}`

        return [resmatch, timestr];
    },

    getNextMatch: async function getNextMatch(tournament_id, auth_key, discord_tag, args = {}){
        const params = new URLSearchParams();
        const url = new URL('https://api.toornament.com/participant/v2/disciplines');
        fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': api_key,
                'Range': 'disciplines=0-49'
            }
        }).then(res => res.json()).then(obj => console.log(obj)).catch(console.log)
    }
}