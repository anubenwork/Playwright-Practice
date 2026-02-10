
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building project...'
                cd/d "%WORKSPACE%"
                npm ci
                npm install
                npx playwright install
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                npx playwright test
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
