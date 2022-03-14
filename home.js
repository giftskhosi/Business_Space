const cancelbtn = document.getElementById('cancel');
const watchbtn = document.getElementById('watch');
const pricebtn = document.getElementById('price');
const tabItems = document.getElementById('tab-item');

cancelbtn.addEventListener('click', (e) => {
    displayCancel();
});

function displayCancel(){
    let cancelOutput = document.getElementById('cancel-output');

    cancelOutput.innerHTML = `<hr><div class="wall">
                                <p id="text-p">If you decide Business space isn't for you -
                                 No problem. no commitment. cancel anytime!</p>
                                 <a href="Signup.html">Watch free for <span>30 Days</span></a>
                                 <img src="pic2.jpg" alt="image">
                                 </div>`;
}

watchbtn.addEventListener('click', (e) => {
    displayWatch();
    
})

function displayWatch(){
    let watchOutput = document.getElementById('watch-output');

    watchOutput.innerHTML = `<hr><div class="wall">
                              <p id="text-p">Watch Business Seminars and educational documentaries
                              anytime, anywhere - personalized for you.</p>
                              <a class="watch-text" href="Signup.html">Watch free for <span>30 Days</span></a>
                              
                              <p id="text-p">Smart TV's, Chromecast, Apple TV, Blu-ray players and more.</p>
                              
                              <p id="text-p">Watch instantly or download for later.</p>
                              <p id="text-p">Available on phone and tablet, wherever you go.</p>
                              
                              <p id="text-p">Use any computer.</p>
                              <p id="text-p">Watch right on Business Space TV.</p>
                              </div>`;
}

pricebtn.addEventListener('click', (e) => {
    displayPrice();
})

function displayPrice(){
    let priceOutput = document.getElementById('price-output');

    priceOutput.innerHTML = `<hr>
    <div id="tab-3-content" class="tab-content-item">
    <div class="wall">
        <p class="text-p">
            Choose one plan and watch everything on DreamTV
        </p>
        <a class="link-watch">Watch free for <span>30 Days</span></a>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Monthly price after free month ends on 7/20/20</td>
                <td>R143.84</td>
                <td>R207.84</td>
                <td>R255.84</td>
            </tr>
            <tr>
                <td>HD Available</td>
                <td>X</td>
                <td>+</td>
                <td>+</td>
            </tr>
            <tr>
                <td>Ultra HD Available</td>
                <td>X</td>
                <td>X</td>
                <td>+</td>
            </tr>
            <tr>
                <td>Screens you can watch on at the same time</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Watch on your laptop, TV, Phone and Tablet</td>
                <td>+</td>
                <td>+</td>
                <td>+</td>
            </tr>
            <tr>
                <td>Unlimited movies and TV shows</td>
                <td>+</td>
                <td>+</td>
                <td>+</td>
            </tr>
            <tr>
                <td>Cancel anytime</td>
                <td>+</td>
                <td>+</td>
                <td>+</td>
            </tr>
            <tr>
                <td>First month free</td>
                <td>+</td>
                <td>+</td>
                <td>+</td>
            </tr>
        </tbody>
    </table>
</div>`;
}