pipeline {
    agent {
        label 'agent'
    }
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'ls -a'
                sh 'pwd'
                
                
            }
        }
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm run test'
                
            }
        }
        
    }
}
