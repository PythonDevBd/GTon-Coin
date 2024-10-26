document.addEventListener("DOMContentLoaded", function () {
    // Initializing elements
    const balanceElement = document.getElementById('balance');
    const availableTonElement = document.getElementById('available-ton');
    const walletConnectBtn = document.getElementById('wallet-connect-btn');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const tabs = document.querySelectorAll('.tab');
    
    let coins = 0; // Initialize balance variable

    function updateBalance(points) {
        coins += points; // Add points to balance
        document.getElementById('balance').textContent = `Current Balance: G:${coins}`; // Update balance display
    }

    // Dynamic balance and TON values
    let gValue = 302000;
    let tonBalance = 0;

    // Function to update display values
    function updateDisplay() {
        balanceElement.textContent = gValue;
        availableTonElement.textContent = `Available: ${tonBalance} TON`;
    }

    // Wallet connect function
    walletConnectBtn.addEventListener('click', function () {
        // Simulating a wallet connection (you'll replace this with real wallet integration)
        const userConfirmed = confirm("Connect your TON wallet?");
        if (userConfirmed) {
            tonBalance += 0.13; // Simulate adding TON after connection
            alert("Wallet connected! 0.13 TON added.");
            updateDisplay();
        }
    });

    // Withdraw function
    withdrawBtn.addEventListener('click', function () {
        const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert("Enter a valid amount.");
            return;
        }
        if (withdrawAmount > tonBalance) {
            alert("Insufficient TON balance.");
            return;
        }

        tonBalance -= withdrawAmount;
        alert(`Withdrew ${withdrawAmount} TON. Withdrawal is pending.`);
        updateDisplay();
    });

    // Tab functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelector('.tab.active').classList.remove('active');
            this.classList.add('active');
            // Add logic to display relevant content based on tab
        });
    });

    // Initialize the display
    updateDisplay();
});
