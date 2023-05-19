import { Injectable } from '@angular/core';
import { exec } from 'child_process';

@Injectable({
  providedIn: 'root'
})
export class DockerService {

  pullImage(imageName: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const command = `docker pull ${imageName}`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  runImage(imageName: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const command = `docker run ${imageName}`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  stopContainer(containerId: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const command = `docker stop ${containerId}`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  }
}
