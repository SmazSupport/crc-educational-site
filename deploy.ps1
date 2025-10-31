# Deploy to GitHub Pages - Simple and Reliable
Write-Host "Building site..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
    Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan
    
    # Navigate to dist folder
    cd dist
    
    # Initialize git repo
    git init
    git add -A
    git commit -m "Deploy to GitHub Pages"
    
    # Push to gh-pages branch
    git push -f https://github.com/SmazSupport/crc-educational-site.git HEAD:gh-pages
    
    # Clean up
    cd ..
    Remove-Item -Recurse -Force dist\.git
    
    Write-Host "`nDeployment complete!" -ForegroundColor Green
    Write-Host "Site will be live at: https://smazsupport.github.io/crc-educational-site/" -ForegroundColor Green
} else {
    Write-Host "Build failed!" -ForegroundColor Red
}
