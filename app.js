const Submit = document.querySelector("#Submit");
const Input = document.querySelector('#Input');
const SubjectInp = document.querySelector('#SubjectInp');


alert('Plese NOTE THAT ALL THE DATA WILL BE LOST WHEN REFRESHING OR LEAVING')

Submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(Input.value == '' &&  SubjectInp.value == ''){
        alert('plese fill in the Subject and Notes')
    }else if(Input.value == ''){
        alert('plese fill in the Notes')
    }else if(SubjectInp.value == ''){
        alert('plese fill in the Subject')
    }else{
       Make();
    }
});

function Make(){
    const DIV123 = document.createElement('div');
    const Subject = document.createElement('h1');
    const Notes = document.createElement('p');
    const Time = document.createElement('h4');
    const Delete = document.createElement('button');

    Delete.className = 'Del'

    DIV123.className = 'DIV';


    const t = new Date();

    Time.innerText = `Time: ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;

    Subject.innerText = SubjectInp.value;

    Notes.innerText = Input.value; 

    DIV123.appendChild(Subject);
    DIV123.appendChild(Time);
    DIV123.appendChild(Notes);
    DIV123.appendChild(Delete);

    document.body.appendChild(DIV123);

    Input.value = '';
    SubjectInp.value = '';

    Delete.addEventListener('click',()=>{
        console.log(Delete.parentElement.remove());
    });

        Delete.innerText = 'Delete';
    
   
}

