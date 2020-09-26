pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'ls -a'
                sh 'pwd'
                sh 'docker-compose up'
                
            }
        }
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm run dev'
                
            }
        }
        
    }
}