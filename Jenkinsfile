pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'ls -a'
                sh 'pwd'
                sh '--privileged docker-compose up'
                
            }
        }
    }
}