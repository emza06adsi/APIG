module.exports={
    api:{
        port:process.env.PORT || 3001,
    },
    jwt:{
        // secret:process.env.JWT_SECRET || 'notasecret',
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql:{
        host:process.env.MYSQL_HOST || `127.0.0.1`,
        user:process.env.MYSQL_USER || `root`,
        password:process.env.MYSQL_PASS || `toor`,
        database:process.env.MYSQL_DB || `gd_database`,
    },
    mysqlService:{
        host:process.env.MYSQL_SRV_HOST || `remotemysql.com`,
        port:process.env.MYSQL_SRV_PORT || 3001,
    }
}