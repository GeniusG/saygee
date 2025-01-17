# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

Rails.application.config.assets.paths << "#{Rails.root}/app/assets/videos"
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.

Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( bootstrap.min.css )
Rails.application.config.assets.precompile += %w( font-awesome.min.css )
Rails.application.config.assets.precompile += %w( ionicons.min.css )
Rails.application.config.assets.precompile += %w( animate.min.css )
Rails.application.config.assets.precompile += %w( vegas.min.css )
Rails.application.config.assets.precompile += %w( csoon.css )
Rails.application.config.assets.precompile += %w( jquery.easing.min.js )
Rails.application.config.assets.precompile += %w( jquery.countdown.min.js )
Rails.application.config.assets.precompile += %w( device.min.js )
Rails.application.config.assets.precompile += %w( wow.min.js )
Rails.application.config.assets.precompile += %w( smoothscroll.js )
Rails.application.config.assets.precompile += %w( form.js )
Rails.application.config.assets.precompile += %w( jquery.placeholder.min.js )
Rails.application.config.assets.precompile += %w( ionicons.min.css )
Rails.application.config.assets.precompile += %w( jquery.js )
Rails.application.config.assets.precompile += %w( bootstrap.min.js )
Rails.application.config.assets.precompile += %w( jquery.mb.YTPlayer.js )
Rails.application.config.assets.precompile += %w( csoon.js )
Rails.application.config.assets.precompile += %w( ionicons.css.erb )
Rails.application.config.assets.precompile += %w( YTPlayer.css )
Rails.application.config.assets.precompile += %w( .svg .eot .woff .ttf )

Rails.application.config.assets.css_compressor = :yui
Rails.application.config.assets.js_compressor = :uglifier


