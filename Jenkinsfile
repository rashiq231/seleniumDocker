pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose -f docker-compose-v3.yml build'
                sh 'npm run test'
            }
        }
    }
}