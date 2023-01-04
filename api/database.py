import psycopg2
import pandas as pd
import pandas.io.sql as sqlio

def connection():
    conn_string = "host='docker.for.mac.localhost' dbname='location_app' user='admin' password=''"
    return psycopg2.connect(conn_string)

def getLocation():
    conn = connection()
    sql = "select * from locations;"
    dat = sqlio.read_sql_query(sql, conn)
    df2 = dat.to_json(orient = 'records')
    conn = None
    # print(df2)
    return df2

# getLocation()