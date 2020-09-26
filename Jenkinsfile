pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'ls -a'
                sh 'docker ps'
                sh 'npm install'
                
            }
        }
    }
}