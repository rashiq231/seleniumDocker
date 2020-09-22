pipeline {
    agent {
        docker{
            image 'node'
            args '-p 4444:4444'
            args '-p 4442:4442'
            args '-p 4443:4443'

        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}