Param (
[string]$uname,
[string]$upass
)
New-LocalUser -Name $uname -Password (ConvertTo-SecureString "$upass" -AsPlainText -force) -FullName $uname;
Add-LocalGroupMember -Group 123 -Member $uname
