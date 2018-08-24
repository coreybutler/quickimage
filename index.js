'use strict'

const EventEmitter = require('events').EventEmitter
const property = (value = null, enumerable = true, configurable = false, writable = true) => {
  return {
    enumerable,
    configurable,
    writable,
    value
  }
}

class QuickImage extends EventEmitter {
  constructor (cfg) {
    super()

    cfg = cfg || {}

    Object.defineProperties(this, {
      // Source Image. This can also be a URL. Must be a PNG.
      source: property(cfg.source || process.cwd()),

      // Custom output filename
      filename: property(cfg.filename || null)

      // Target Directory
      target: property(cfg.target || process.cwd()),

      // Map filenames
      _map: property(cfg.files || null),

      // Identify which file types to generate
      _types: property(cfg.types),

      // Indicate whether a favicon should be created
      // This is not affected
      favicon: property(cfg.hasOwnProperty('favicon') ? cfg.favicon : true)
    })

    this.filename = this.filename || require('path').basename(this.source, require('path').extname(this.source))
  }

  get defaultMap () {
    return {
      ico: {
        sizes: [16, 24, 32, 48, 64, 128, 256]
      },
      icns: {
        sizes: [16, 32, 64, 128, 256, 512, 1024]
      },
      png: {
        sizes: [16, 22, 24, 32, 44, 48, 57, 64, 72, 96, 120, 128, 144, 152, 195, 228, 256, 512, 1024]
      },
      jpg: {
        sizes: [16, 22, 24, 32, 44, 48, 57, 64, 72, 96, 120, 128, 144, 152, 195, 228, 256, 512, 1024]
      }
    }
  }

  get map () {
    return this._map || this.defaultMap
  }

  get electronType () {
    return {
      ico: {
        sizes: [48]
      },
      png: {
        sizes: [{
          22: this.filename + 'Template'
        }, {
          44: this.filename + 'Template@2X'
        }]
      }
    }
  }

  convert () {
    Object.keys(this.map).forEach(iconType => {

    })
  }
}

module.exports = QuickImage
