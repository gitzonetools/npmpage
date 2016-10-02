import { LazyModule } from 'smartsystem'
import * as plugins from './npmpage.plugins'

import * as _modStandard from './mod_standard/index'
import * as _modPublish from './mod_publish/index'

export let modStandard = new LazyModule<typeof _modStandard>('./mod_standard/index',__dirname)
export let modPublish = new LazyModule<typeof _modPublish>('./mod_publish/index',__dirname)
