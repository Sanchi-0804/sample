import React from 'react';

const Signup = () => {
    return (
        <div style={styles.container}>
            <div style={styles.signupContainer}>
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Username" required style={styles.input} />
                    <input type="password" placeholder="Password" required style={styles.input} />
                    <input type="password" placeholder="Confirm Password" required style={styles.input} />
                    <button type="submit" style={styles.button}>Sign Up</button>
                </form>
                <div style={styles.loginRedirect}>
                    <p>Already have an account? <a href="#">Login here</a></p>
                </div>
            </div>
        </div>
    );
};

// Inline styles for the component
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
    },
    signupContainer: {
        width: '300px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        width: '100%',
    },
    button: {
        padding: '10px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
    },
    loginRedirect: {
        textAlign: 'center',
        marginTop: '10px',
    },
};

export default Signup;
