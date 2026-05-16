pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/arun0180/Devops-Health-App.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t healthcare-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop healthcare-container || exit 0'
                bat 'docker rm healthcare-container || exit 0'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name healthcare-container healthcare-app'
            }
        }
    }
}