if ((Test-Path .\.env) -ne $true) {
    Copy-Item .\.env.sample .\.env
}
if ((Test-Path .\config.json) -ne $true) {
    Copy-Item .\sample.config.json .\config.json
}