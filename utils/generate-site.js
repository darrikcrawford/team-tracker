const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // If there's an error, reject the Promise and send an error to Promise's catch method
            if (err) {
                reject(err);

                // Return out of function so Promise doesn't go to resolve function
                return;
            }
            // If there are no errors, resolve Promise and send the data
            resolve({
                ok: true,
                message: 'File successfully created!'
            });
        }):
    }):
}

const copyFile = () => {
    return new Promise((resolve, reject) =>{
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if(err) {
                reject(err); 
                return; 
            }
            
            resolve({
                ok: true,
                message: 'File copied successfully!'
            }); 
        });
    });
}; 

module.exports = {writeFile, copyFile};