require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "rn-progress-hud"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/jesster2k10/rn-progress-hud/rn-progress-hud.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"

  s.dependency "React"
  s.dependency "SVProgressHUD"
  s.swift_version = "5.0"
end
