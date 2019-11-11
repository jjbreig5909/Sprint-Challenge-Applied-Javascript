// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response);
        console.log(response.data.topics);
    })
    .catch(error => {
        console.log('the data was not returned', error);
    });

const newTopic= (topic) =>{
    const topicName=document.createElement('div');
    topicName.textContent=`${topic}`;
    topicName.classList.add('tab');
return topicName;
};

const topicList=document.querySelector('.topics');

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        response.data.topics.forEach(topic=> {
            topicList.appendChild(newTopic(topic))
        });
    })

    .catch(error => {
        console.log('the data was not returned', error);
    });