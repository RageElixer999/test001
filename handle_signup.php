<form action="handle_login.php" method="post">
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    </div>
    <button type="submit">Login</button>
</form>

<form action="handle_signup.php" method="post">
    <div class="form-group">
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" required>
    </div>
    <div class="form-group">
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name" required>
    </div>
    <div class="form-group">
        <label for="signup-email">Email:</label>
        <input type="email" id="signup-email" name="signup-email" required>
    </div>
    <div class="form-group">
        <label for="signup-password">Password:</label>
        <input type="password" id="signup-password" name="signup-password" required>
    </div>
    <button type="submit">Sign Up</button>
</form>

