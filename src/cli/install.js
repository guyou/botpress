import util from '../util'

import ModulesManager from '../manager'

const waitingText = 'please wait, we are trying to install your new modules...'

module.exports = function(module, modules) {
  util.print('info', waitingText)
  let manager = ModulesManager()
  manager.install(module, ...modules)
}