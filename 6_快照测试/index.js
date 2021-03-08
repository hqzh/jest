export const generateConfig = () => {
    return {
        server: 'http://localhost',
        port: 8083,
        domain: 'localhost'
    }
}

export const generateAnotherConfig = () => {
    return {
        server: 'http://localhost',
        port: 8084,
        domain: 'localhost'
    }
}

export const generateDynamicConfig = () => {
    return {
        server: 'http://localhost',
        port: 8084,
        time: new Date()
    }
}

export const generateInlineConfig = () => {
    return {
        server: 'http://localhost',
        port: 8084,
        time: new Date()
    }
}