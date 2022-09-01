import { registerMicroApps, start } from 'qiankun'
import apps from './config'

registerMicroApps(apps)
start()
