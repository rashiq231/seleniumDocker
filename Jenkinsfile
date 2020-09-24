pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                withEnv(["PATH=$PATH:~/.local/bin"]){
                    sh 'docker-compose -f selenium-grid-3.yml build'
                }
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}