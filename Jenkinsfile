pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'systemctl start docker'
                sh 'docker-compose up'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}