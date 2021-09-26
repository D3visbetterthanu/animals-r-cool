function noisetime(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TEJVzn52P/model.json', modelReady);
}
function modelReady{
    classifier.classify(gotResults)
}
function gotResults(error, results){
     
}