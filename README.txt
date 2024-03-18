Getting the API Working
- visual studio was used in the setup and use the .net web api template
- the api was published to newly created empty folder
- the api was configured in IIS with the above folder as the path and the PORT SET ON 8082
- dotnet hosting web bundle runtime was downloaded and installed


--npm install fs
--npm install filestack-react
--npm install -- save multer

<img src={URL.createObjectURL(GetMoviePoster(d.movieName))} />

useEffect(() => {
            fetch(apicall)
                .then(response => response.json())
                .then(data => {
                    if (data != null) {
                        setJsonData(data);

                        data.forEach(movie => {
                            console.log("image data have been parsed")
                            testtest(movie.imageData)
                        });

                        const blobUrls = data.map(movie => (
                            {
                                imageUrl: testtest(movie.imageData)
                            }));

                        setJsonData(blobUrls)
                        console.log("JSONDATA", jsonData)
                        console.log("BLOBS", blobUrls)

                        console.log("success", data);
                    } else {
                        console.log("fail");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }, []);