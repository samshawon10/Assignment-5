//For Calling Blog Page..
document.getElementById("Blog").addEventListener("click",function () {
    window.location.href = "Blog.html";
})

//donation Funtion Start here
function donation(num1,num2,num3,num4,num5){
    const mainBalance = document.getElementById(num1).innerText;
    const currentBalance = parseInt(mainBalance);                                       // Current main balance
    const modifiedBalance = document.getElementById(num3).innerText;
    const updatedBalance = parseInt(modifiedBalance);                                   // Balance to be modified
    const donationAmount = document.getElementById(num2).value;
    const donationHistory = document.getElementById(num4);                               // Section to show donation history
    const donationPlace = document.getElementById(num5).innerText;                       
    
    // Check if the input is a valid number
    if (isNaN(donationAmount) || parseInt(donationAmount) <= 0) {
        alert("Please enter a valid positive donation amount.");
    } 
    else if (currentBalance < donationAmount){
        alert("Insufficient balance! Please enter a smaller donation amount.")
    }
    else {
        const donation = parseInt(donationAmount);             // Convert donation amount to number
    
        // Update balances
        const newMainBalance = currentBalance - donation;
        const newModifiedBalance = updatedBalance + donation;
    
        // Update displayed balances
        document.getElementById(num1).innerText = newMainBalance;                // Updated main balance
        document.getElementById(num3).innerText = newModifiedBalance;           // Updated modified balance
    
        // Add donation entry to the history
        const currentDate = new Date();
        const formattedTime = currentDate.toLocaleString();                     
        // Append new donation history entry
        donationHistory.innerHTML += `
            <div class="border border-gray-200 rounded-lg p-4 mt-4 mb-4">
                <p class="text-lg font-bold text-gray-900">You donated ${donation.toFixed(2)} Taka to ${donationPlace}.</p>
                <p class="text-md text-gray-500">Donation made at: ${formattedTime}</p>
            </div>
        `;
    
        // Show confirmation modal
        document.getElementById('donation_modal').showModal();
    }
    
}
//donation function colsed here.


//history & donation Button start here
function change(num1,num2){
    const donation = document.getElementById(num1);
    donation.classList.add(
      'btn',
      'btn-outline',
      'border-green-500',
      'px-4',
      'py-2',
      'text-green-700',
      'rounded-lg',
      'hover:bg-green-500',
      'hover:text-white'
    );
    
    const y = document.getElementById(num2);
    y.className = '';
    y.classList.add(
      'btn',
      'btn-primary',
      'bg-yellow-400',
      'px-4',
      'py-2',
      'text-black',
      'rounded-lg',
      'hover:bg-yellow-500',
      'hover:text-white'
    );
    

}
//history & donation Button End here

//history funtion start here
function history(id1,id2){
    const x = document.getElementById(id1);
    const y = document.getElementById(id2);
    x.classList.add('hidden');
    y.classList.remove('hidden');

}
//history funtion start here

