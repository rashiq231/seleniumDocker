pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose --version'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}