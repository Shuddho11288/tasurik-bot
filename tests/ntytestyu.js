const axios = require('axios');
const fs = require('fs');

async function makeRequest() {
    try {
        // Read the image file
        const imageData = fs.readFileSync('sus.png');

        // Convert the image data to base64 format
        const base64ImageData = Buffer.from(imageData).toString('base64');

        const data = {
            "data": [
                
                  `data:image/png;base64,${base64ImageData}`,
            
                "2x" // Replace this with your choice of upscaler
            ]
        };
        

        const response = await axios.post(
            'https://rifd-face-real-esrgan.hf.space/run/predict',
            data
        );

        console.log(response.data);
        let da = response.data.data[0]
        // save the image
        const base64Data = da.replace(/^data:image\/png;base64,/, '');

// Decode the base64 data
const buffer = Buffer.from(base64Data, 'base64');

// Save the decoded buffer to a file
fs.writeFile('sussy.png', buffer, 'base64', (err) => {
  if (err) throw err;
  console.log('Image saved as sus.png');
});
    } catch (error) {
        console.error('Error making request:', error);
    }
}

makeRequest();
