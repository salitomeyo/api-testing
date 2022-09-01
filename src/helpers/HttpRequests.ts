const axios = require('axios').default;

export class HttpRequests {
    async get( url: string, headers: Object = {"headers": {}} ) {
        const { data, status } = await axios.get(url, headers);

        return { data, status }
    }

    async post( url: string, body: Object, headers: Object = {"headers": {}}) {
        const { data, status } = await axios.post(url, headers, body);

        return { data, status }
    }

    async put( url: string, body: Object, headers: Object = {"headers": {}}) {
        const { data, status } = await axios.put(url, headers, body);

        return { data, status }
    }

    async patch( url: string, body: Object, headers: Object = {"headers": {}}) {
        const { data, status } = await axios.patch(url, headers, body);

        return { data, status }
    }

    async delete( url: string, headers: Object = {"headers": {}} ) {
        const { data, status } = await axios.delete(url, headers);

        return { data, status }
    }
}
