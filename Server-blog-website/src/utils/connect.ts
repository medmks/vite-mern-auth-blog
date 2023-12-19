import mongoose from 'mongoose'
import config from 'config'
async function ConnectToDb() {
  const DbUrl = config.get<string>('Db_name_Url')
  mongoose.Promise = Promise
  mongoose.connect(DbUrl)
  mongoose.connection.once('open', () => {
    console.log('Connected to the database!')
  })
  mongoose.connection.on('error', (error: Error) => console.error(error))
}
export default ConnectToDb
