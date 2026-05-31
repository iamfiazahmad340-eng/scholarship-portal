document.getElementById('queryForm').addEventListener('submit', (e) => {
    // 1. Page ko jump karne se rokna
    e.preventDefault(); 
    e.stopPropagation();

    const data = {
        name: document.getElementById('userName').value,
        question: document.getElementById('userQuestion').value,
        date: new Date().toLocaleDateString()
    };

    // 2. Data bhejte waqt scroll position ko lock karna
    const scrollY = window.scrollY;
    
    fetch("https://YOUR_DATABASE_URL_HERE.firebaseio.com/queries.json", {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(() => {
        alert("Saved!");
        document.getElementById('queryForm').reset();
        
        // 3. Sabse important: Submit ke baad scroll position wahi rakhna
        window.scrollTo(0, scrollY);
    });
});