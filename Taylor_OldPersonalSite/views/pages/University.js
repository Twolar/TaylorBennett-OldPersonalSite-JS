let University = {
    render : async () => {
        let view =  /*html*/`
        <div class="container">
            <div class="text-center mb-4">
                <h1 class="display-3">University</h1>
                <p>
                Below is my university transcript, the degree is a Major in Business Psychology with a Minor in Computer Science.
                </p>
            </div>

            <div class="row font-weight-light text-light">
                <div class="table-responsive  bg-dark mb-4">
                    <table class="table table-dark text-light">
                        <h1 class="display-4 text-center">Computer Science</h1>
                        <thead>
                            <tr>
                                <th scope="col">Year</th>
                                <th scope="col">Semester</th>
                                <th scope="col">Name</th>
                                <th scope="col">Level</th>
                                <th scope="col">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">2019</th>
                                <th scope="col">Two</th>
                                <th scope="col">159251 - Software Engineering Design and Construction</th>
                                <th scope="col">200</th>
                                <th scope="col">B+</th>
                            </tr>
                            <tr>
                                <th scope="col">2019</th>
                                <th scope="col">One</th>
                                <th scope="col">159334 - Computer Networks</th>
                                <th scope="col">300</th>
                                <th scope="col">B+</th>
                            </tr>
                            <tr>
                                <th scope="col">2018/19</th>
                                <th scope="col">Summer School</th>
                                <th scope="col">159201 - Algorithms and Data Structures</th>
                                <th scope="col">200</th>
                                <th scope="col">B-</th>
                            </tr>
                            <tr>
                                <th scope="col">2018</th>
                                <th scope="col">One</th>
                                <th scope="col">159234 - Object-Oriented Programming</th>
                                <th scope="col">200</th>
                                <th scope="col">C</th>
                            </tr>
                            <tr>
                                <th scope="col">2017</th>
                                <th scope="col">Two</th>
                                <th scope="col">159102 - Computer Science Fundamentals</th>
                                <th scope="col">100</th>
                                <th scope="col">C+</th>
                            </tr>
                            <tr>
                                <th scope="col">2016</th>
                                <th scope="col">One</th>
                                <th scope="col">159101 - Programming Fundamentals</th>
                                <th scope="col">100</th>
                                <th scope="col">B</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="table-responsive  bg-dark mb-4">
                    <table class="table table-dark text-light">
                        <h1 class="display-4 text-center">Business Psychology</h1>
                        <thead>
                            <tr>
                                <th scope="col">Year</th>
                                <th scope="col">Semester</th>
                                <th scope="col">Name</th>
                                <th scope="col">Level</th>
                                <th scope="col">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">2019</th>
                                <th scope="col">One</th>
                                <th scope="col">175343 - Personnel Psychology and Career Development</th>
                                <th scope="col">300</th>
                                <th scope="col">B-</th>
                            </tr>
                            <tr>
                                <th scope="col">2019</th>
                                <th scope="col">One</th>
                                <th scope="col">175316 - Evolution, Culture and Mind</th>
                                <th scope="col">300</th>
                                <th scope="col">A-</th>
                            </tr>
                            <tr>
                                <th scope="col">2019</th>
                                <th scope="col">One</th>
                                <th scope="col">175302 - Abnormal and Therapeutic Psychology</th>
                                <th scope="col">300</th>
                                <th scope="col">B</th>
                            </tr>
                            <tr>
                                <th scope="col">2018</th>
                                <th scope="col">Two</th>
                                <th scope="col">230310 - Tū Tira Mai: Practising Engagement</th>
                                <th scope="col">300</th>
                                <th scope="col">B+</th>
                            </tr>
                            <tr>
                                <th scope="col">2018</th>
                                <th scope="col">Two</th>
                                <th scope="col">175345 - Organisational Psychology</th>
                                <th scope="col">300</th>
                                <th scope="col">B</th>
                            </tr>
                            <tr>
                                <th scope="col">2018</th>
                                <th scope="col">Two</th>
                                <th scope="col">152336 - Leadership Practice</th>
                                <th scope="col">300</th>
                                <th scope="col">B+</th>
                            </tr>
                            <tr>
                                <th scope="col">2018</th>
                                <th scope="col">Two</th>
                                <th scope="col">152304 - Managing Services</th>
                                <th scope="col">300</th>
                                <th scope="col">B</th>
                            </tr>
                            <tr>
                                <th scope="col">2018</th>
                                <th scope="col">One</th>
                                <th scope="col">175206 - Memory and Cognition</th>
                                <th scope="col">200</th>
                                <th scope="col">B-</th>
                            </tr>
                            <tr>
                                <th scope="col">2018</th>
                                <th scope="col">One</th>
                                <th scope="col">114241 - Principles of Human Resources Management</th>
                                <th scope="col">200</th>
                                <th scope="col">B-</th>
                            </tr>
                            <tr>
                                <th scope="col">2017</th>
                                <th scope="col">Two</th>
                                <th scope="col">230210 - Tu Rangaranga: Global Encounters</th>
                                <th scope="col">200</th>
                                <th scope="col">B+</th>
                            </tr>
                            <tr>
                                <th scope="col">2017</th>
                                <th scope="col">Two</th>
                                <th scope="col">175201 - Social Psychology</th>
                                <th scope="col">200</th>
                                <th scope="col">B</th>
                            </tr>
                            <tr>
                                <th scope="col">2017</th>
                                <th scope="col">One</th>
                                <th scope="col">175203 - Introduction to Psychological Research</th>
                                <th scope="col">200</th>
                                <th scope="col">C</th>
                            </tr>
                            <tr>
                                <th scope="col">2017</th>
                                <th scope="col">One</th>
                                <th scope="col">152200 - Contemporary Management</th>
                                <th scope="col">200</th>
                                <th scope="col">C</th>
                            </tr>
                            <tr>
                                <th scope="col">2017</th>
                                <th scope="col">One</th>
                                <th scope="col">114241 - Managing Human Resources</th>
                                <th scope="col">200</th>
                                <th scope="col">D</th>
                            </tr>
                            <tr>
                                <th scope="col">2016</th>
                                <th scope="col">Two</th>
                                <th scope="col">230112 - Tu Arohae: Critical Thinking</th>
                                <th scope="col">100</th>
                                <th scope="col">B</th>
                            </tr>
                            <tr>
                                <th scope="col">2016</th>
                                <th scope="col">Two</th>
                                <th scope="col">230111 - Tu Kupu: Writing and Inquiry</th>
                                <th scope="col">100</th>
                                <th scope="col">B-</th>
                            </tr>
                            <tr>
                                <th scope="col">2016</th>
                                <th scope="col">Two</th>
                                <th scope="col">175102 - Psychology as a Natural Science</th>
                                <th scope="col">100</th>
                                <th scope="col">C+</th>
                            </tr>
                            <tr>
                                <th scope="col">2016</th>
                                <th scope="col">One</th>
                                <th scope="col">230110 - Turangawaewae: Identity & Belonging in Aotearoa NZ</th>
                                <th scope="col">100</th>
                                <th scope="col">C+</th>
                            </tr>
                            <tr>
                                <th scope="col">2016</th>
                                <th scope="col">One</th>
                                <th scope="col">175101 - Psychology as a Social Science</th>
                                <th scope="col">100</th>
                                <th scope="col">C+</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default University;
