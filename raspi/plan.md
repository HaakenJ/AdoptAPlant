* Set up port forwarding on port 80 for web server.
    - May be good idea to use CloudFare or NOIP with a domain name
    - Possibly set up Fail2Ban but may not be necessary for web server.
* Also set up port forwarding on port 8081 for live stream.
    - We will have a link to this page to see the live stream.


* Ask Brennon if he thinks this is a safe and practical approach.

* How does he host from raspi?
* How do I connect outside of the network?  Can I use the static IP 
that I assigned to my pi like so 10.0.0.128:80 to actually load the page?
* If it is set up with a domain name, is that name connected to that static
IP address so that the domain name gets converted to 10.0.0.128:80?